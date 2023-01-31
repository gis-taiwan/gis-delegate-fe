import axios, { AxiosError, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

interface IScheduleData {
  dietary_requirement: string;
  day1_keynote: string;
  day1_lunch: string;
  day2_keynote: string;
  day2_lunch: string;
  day3_critical: string;
  day3_lunch: string;
  day4_lunch: string;
  day4_mentor: string;
  day5_lunch: string;
  day5_presentation: string;
  first_name: string;
  last_name: string;
  prefer_name: string;
}

const verifyCode = async (giscode: string): Promise<boolean> => {
  try {
    const response = await instance.get(`/verify/${giscode}`);
    return true;
  } catch (error) {
    return false;
  }
};

const fetchSchedule = async (giscode: string): Promise<IScheduleData> => {
  const response = await instance.get(`/schedule/${giscode}`);
  return response.data;
};

export { verifyCode, fetchSchedule, type IScheduleData };
