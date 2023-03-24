const ButtonComponent = ({ title, _style = "light_shadow bg-white" }) => {
  return (
    <>
      <div className="relative  p-2">
        <button
          className={` relative  text-darkest md:p-3 p-2 md:px-6 px-3 ${_style}`}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
