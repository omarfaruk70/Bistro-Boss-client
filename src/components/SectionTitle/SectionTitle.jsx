const Sectiontitle = ({heading, subheading}) => {
    return (
        <div className="md:w-3/12 mx-auto mb-5">
            <p className="text-xl font-bold text-center text-yellow-400 mb-2">--- {subheading} ---</p>
            <h2 className="text-4xl font-bold text-center border-y-4">{heading}</h2>
        </div>
    );
};

export default Sectiontitle;