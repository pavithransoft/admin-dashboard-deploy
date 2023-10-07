const CardList = (props) => {
  return (
    <div className="grid grid-cols-2 items-center hover:bg-slate-200 hover:px-2">
      <div className="grid grid-cols-2 lg:gap-5 items-center">
        <div className="justify-self-center sm:w-8 sm:h-8 lg:w-10 lg:h-10">
          {props.profile}
        </div>
        <div className="sm:text-xs lg:text-sm">
          <h1>{props.name}</h1>
          <h1 className="text-slate-500">{props.email}</h1>
        </div>
      </div>
      <div className="justify-self-end sm:text-base lg:text-lg">
        {props.sales}
      </div>
    </div>
  );
};

export default CardList;
