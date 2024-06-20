import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('--> database connection successful <--'.blue);
  } catch (error) {
    console.error('--> Error in connecting database: <--'.red, error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
