// api/register.ts
import { connect } from "@/dbConfig/database";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      educationLevel,
    } = body as {
      fullName: string;
      userName: string;
      email: string;
      password: string;
      confirmPassword: string;
      educationLevel: string;
    };

    // Check for Existing Email
    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const existedUserName = await User.findOne({ userName });
    if (existedUserName) {
      return NextResponse.json(
        { error: "User Name already exists" },
        { status: 400 }
      );
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create New User
    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashPassword,
      educationLevel,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "Registered Successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
