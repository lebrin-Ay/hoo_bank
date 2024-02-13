

// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none ${styles} rounded-[10px] hover:scale-105`}>
    Get Started
    </button>
  )
}

export default Button;