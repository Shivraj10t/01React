import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  //create account
  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //user account create successfuly then loin this user
        await this.login({ email, password });
      } else {
        return userAccount;
      }
      console.log(userAccount);
    } catch (error) {
      throw error;
    }
  }
  //user Login
  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  //get user states login or not
  async getCurrentUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.get();
    } catch (error) {
     console.log("Appwrite getCurrentUser Error:: ",error)
    }
  }
  //user logout
  async logout() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite getCurrentUser Error:: ",error)
    }
  }
}
const authservice = new AuthService();

export default authservice;
