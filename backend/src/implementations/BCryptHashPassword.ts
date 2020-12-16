import { compare, hash } from 'bcrypt';

class BCryptHashPassword {
  public async generateHash(password: string): Promise<string> {
    return hash(password, 8);
  }

  public async compareHash(
    password: string,
    passwordHashed: string,
  ): Promise<boolean> {
    return compare(password, passwordHashed);
  }
}

export default new BCryptHashPassword();
