"use server";
import { supabase } from "@/lib/supabase/client";

export async function signIn(email, password) {
  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return { success: false, error: authError.message };
    }

    const { data: nurseData, error: nurseError } = await supabase
      .from("nurses")
      .select("*")
      .eq("email", email)
      .single();

    if (nurseError) {
      return { success: false, error: "Account not found" };
    }

    return {
      success: true,
      user: authData.user,
      nurse: nurseData,
      session: authData.session,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function signUp(formData) {
  const { name, email, phone, empId, password } = formData;

  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw new Error(authError.message);

    // Create nurse record - column is "empId" not emp_id
    const { data: nurseData, error: nurseError } = await supabase
      .from("nurses")
      .insert([
        {
          user_id: authData.user.id,
          name,
          email,
          phone,
          empId: parseInt(empId), // Use empId, not emp_id
        },
      ])
      .select();

    if (nurseError) throw new Error(nurseError.message);

    return { success: true, data: nurseData[0] };
  } catch (error) {
    return { success: false, error: error.message };
  }
}