import defaultUser, {businessUser} from '../utils/defaultUser';


export async function getUser(email, password) {
  try {
    // Send request

    return {
      isOk: true,
      data: email === 'sandy' ? defaultUser : businessUser
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}


