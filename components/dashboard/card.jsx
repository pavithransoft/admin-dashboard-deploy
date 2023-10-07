const Card = (props) => {
  return (
    <div className="border rounded-xl p-2 lg:p-4 relative shadow hover:bg-slate-400 hover:text-white">
      <h3 className="text-xs lg:text-base pb-2 text-slate-500">
        {props.title}
      </h3>
      <span className="absolute top-1 right-1 lg:top-2 lg:right-4">
        {props.icon}
      </span>
      <h2 className="text-sm">{props.reach}</h2>
      <p className="text-[0.5rem] text-slate-500">{props.description}</p>
    </div>
  );
};

export default Card;
