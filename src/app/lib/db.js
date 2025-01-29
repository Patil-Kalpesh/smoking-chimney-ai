const {usk,password} =process.env
console.log(usk+" "+password);

if (!usk || !password) {
    console.error("Missing MongoDB credentials in environment variables!");
  }
  
  export const connectionStr =`mongodb+srv://${usk}:${password}@cluster0.fbaxo.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0`;
    
// export const connectionStr="mongodb+srv://"+usernamek+":"+password+"@cluster0.44y3a.mongodb.net/db_scsai?retryWrites=true&w=majority&appName=Cluster0"
// export const connectionStr="mongodb+srv://"+usernamek+":"+password+"@cluster0.sb4ya.mongodb.net/db_scsai?retryWrites=true&w=majority&appName=Cluster0"
