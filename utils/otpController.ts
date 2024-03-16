
import { Prisma, PrismaClient } from '@prisma/client';
import {sendSMS} from  './smsService'; // Implement your SMS sending logic

const prisma = new PrismaClient();

const generateOTP = async (length: number) => {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Generate a random digit and add it to the OTP
  }
  return otp;
};

const generateAndStoreOTP = async (mobileNumber:string ,otpLength:number) => {
  const otp = await generateOTP(otpLength);

  await prisma.user.update({
    where: { phoneNumber: mobileNumber}  as Prisma.UserWhereUniqueInput ,
    data: {
      otp,
    },
  });
  return otp;
 
};


export const sendOTP = async (recipient:string) => {
  // console.log(recipient)
  const user = await prisma.user.findUnique({where: {  phoneNumber: recipient } as Prisma.UserWhereUniqueInput});

  if (!user) {
    throw new Error('User not found');
  }

  const userPhoneNumber = user.phoneNumber
  console.log(userPhoneNumber)
  const otp = await generateAndStoreOTP(userPhoneNumber, 6);
  await sendSMS(user.phoneNumber, `Your secure OTP code for authentication is : ${otp}`);
};

export const verifyOTP = async (recipient:string , otp:string) => {
  const user = await prisma.user.findUnique({where: {  phoneNumber: recipient  } as Prisma.UserWhereUniqueInput});
  if (!user) {
    throw new Error('User not found');
  }

  const mobileNumber = user.phoneNumber

  if (user.otp === otp) {
    // Clear the used mobile OTP and mark it as verified
    await prisma.user.update({
        where: { phoneNumber: mobileNumber }  as Prisma.UserWhereUniqueInput,
        data: {
            otp: null,
            isPhoneOtpVerified: true,
        },
    });
    return true;
  }
  return false;
};

