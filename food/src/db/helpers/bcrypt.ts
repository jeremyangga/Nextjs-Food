import bcrypt from 'bcryptjs';

const hashPassword = (password:string) => bcrypt.hashSync(password, 10);

const comparePassword = (originalPassword:string, hashedPassword:string) =>{
    return bcrypt.compareSync(originalPassword, hashedPassword);
}

export {hashPassword, comparePassword};