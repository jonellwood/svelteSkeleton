// import db from db


export async function get({ params }) {
  // db.collection.find()
  // data
  return{
    status: 200,
    body:{
      data: 'data returned from db'
    }
  };
}
