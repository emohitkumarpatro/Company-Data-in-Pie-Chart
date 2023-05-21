// const users = [
//     { "userId": 1, "gender": "male", "type": "fulltime" },
//     { "userId": 2, "gender": "female", "type": "parttime" },
//     { "userId": 3, "gender": "male", "type": "fulltime" }
//   ];


const genders = ["male", "female"];
const types = ["fulltime", "parttime","dailywage"];
const users = [];

for (let i = 0; i < 500; i++) {
  const randomIndexGender = Math.floor(Math.random() * genders.length);
  const randomIndexType = Math.floor(Math.random() * types.length);

  const record = {
    userId: i + 1,
    gender: genders[randomIndexGender],
    type: types[randomIndexType]
  };

  users.push(record);
}



export default users;