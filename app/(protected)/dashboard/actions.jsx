// app/actions/nurse.js
"use server";
import { supabase } from "@/lib/supabase/client";

export async function addNurse(formData) {
  const { name, email, phone, empId, password } = formData;

  try {
    // 1. Create auth user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
          emp_id: empId,
        },
      },
    });

    if (authError) throw new Error(authError.message);

    // 2. Create nurse record in nurses table
    const { data: nurseData, error: nurseError } = await supabase
      .from("nurses")
      .insert([
        {
          user_id: authData.user.id,
          name,
          email,
          phone,
          emp_id: empId,
        },
      ])
      .select();

    if (nurseError) throw new Error(nurseError.message);

    return { success: true, data: nurseData[0] };
  } catch (error) {
    return { success: false, error: error.message };
  }
}