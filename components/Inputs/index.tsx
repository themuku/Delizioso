import styles from "./Input.module.css";

const Email = () => {
  return (
    <div>
      <h3 className="mb-[15px] text-[#311F09] text-[14px]">Email address</h3>
      <input
        className="rounded-[10px] text-[14px] flex bg-[#D0CCC7] placeholder:text-black py-[19px] placeholder:text-left text-black px-[30px] outline-none border-0 w-full"
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
};

const FullName = () => {
  return (
    <div>
      <h3 className="mb-[15px] text-[#311F09] text-[14px]">Full name</h3>
      <input
        className="rounded-[10px] text-[14px] flex bg-[#D0CCC7] placeholder:text-black py-[19px] placeholder:text-left text-black px-[30px] outline-none border-0 w-full"
        type="text"
        placeholder="Enter your full name"
      />
    </div>
  );
};

const Password = () => {
  return (
    <div>
      <h3 className="mb-[15px] text-[#311F09] text-[14px]">Password</h3>
      <input
        className="rounded-[10px] text-[14px] flex bg-[#D0CCC7] placeholder:text-black py-[19px] placeholder:text-left text-black px-[30px] outline-none border-0 w-full"
        type="password"
        placeholder="Enter your password"
      />
    </div>
  );
};

const Checkbox = () => {
  return (
    <div>
      <input
        className={`${styles.checkboxInput} mr-[16px] outline-none border-[1px] border-solid border-[#DCD4CB] rounded-full`}
        type="checkbox"
        value="remember"
        name="remember"
        id="remember"
      />
      <span className={styles.checkbox}></span>
      <label className="mr-[15px] inline-block" htmlFor="remember">
        Remember me
      </label>
    </div>
  );
};

export default { FullName, Email, Password, Checkbox };
