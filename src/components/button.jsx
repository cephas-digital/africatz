const ButtonComponent = ({ title, _style = "light_shadow bg-white" }) => {
  return (
    <>
      <div className="relative  p-2">
        <button className={` relative  text-darkest p-3 px-6 ${_style}`}>
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
