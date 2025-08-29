const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, required: true, trim : true },
    email:{type: String, required: true, unique: true, lowercase: true },
    age:{type: Number,required: true,  min: 0 },
    createdAt:{type: Date, default: Date.now}
});
const User = mongoose.model('User', userSchema);
async function createUser() {
    try{
        const newUser =  await User.create({
            name: "John Doe",
            email: "mike.ross@arkx.com",
            age: 30 
        });
        console.log("User created:", newUser);
    
    }catch(err){
        console.error("Error creating user:", err);
    }  
}
async function fetchUsers(page = 1, limit = 5) {
    try {
        const users = await User.find()
            .skip((page - 1) * limit)
            .limit(limit);
        console.log(` Users (Page ${page}):`, users);
    } catch (err) {
        console.error(" Error fetching users:", err.message);
    }
}
async function fetchUserByEmail(email) {
    try{
        const user = await User.findOne({email});
        if (!user) return console.log("User not found", email);
        console.log("User found:", user);
    } catch(err){
        console.error("Error fetching user:", err.message);
    }
}
async function updateUserEmail(name, newEmail) {
     try {
        const user = await User.findOneAndUpdate(
            { name },
            { email: newEmail },
            { new: true, runValidators: true }
        );
        if (!user) return console.log("User not found", name);
        console.log("User updated:", user);
    } catch(err){
        console.error("Error updating user:", err.message);
    }
}

async function deleteUsersBefore(date){
    try{
        const result = await User.deleteMany({ createdAt: { $lt: date } });
        console.log(`🗑️ Deleted ${result.deletedCount} users created before ${date}`);
    } catch(err){
        console.error("Error deleting users:", err.message);
    }
}
async function main() {
   try {
        await mongoose.connect("mongodb://127.0.0.1:27017/userdb");
        console.log(" Connected to MongoDB");
        await createUser();
        await fetchUsers(1, 5);
        await fetchUserByEmail("mike.ross@arkx.com");
        await updateUserEmail("John Doe", "john.new@arkx.com"); 
        await updateUserEmail("Mike Ross", "mike.new@arkx.group");
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        await deleteUsersBefore(oneWeekAgo);
        mongoose.disconnect();
    }catch(err){
        console.error(" An error occurred:", err.message);    
    }
}
main();