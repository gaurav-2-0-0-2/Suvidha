import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NO;

export const sendSMS = async (recipientPhoneNumber:string, message:string) => {
  const client = twilio(accountSid, authToken);

  try {
    await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: `+91${recipientPhoneNumber}`,
    });

    console.log(`SMS sent to: ${message}`);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

