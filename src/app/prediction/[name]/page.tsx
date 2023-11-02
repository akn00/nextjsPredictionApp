const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

async function Prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationalityData = getPredictedNationality(params.name);
  const [age, gender, nationality] = await Promise.all([
    ageData,
    genderData,
    nationalityData,
  ]);

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
          border: "0.5px grey solid",
          borderRadius: "25px",
          // width: "90%",
          padding: "50px 90px",
          boxShadow:"-8px 4px 30px grey, 8px -4px 30px grey, 8px 4px 30px grey, -8px -4px 30px grey"
        }}
      >
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Personal Info
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Name: {params.name}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Age: {age?.age}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Gender: {gender?.gender}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Nationality: {nationality?.country[0]?.country_id}
        </div>
        
      </div>
    </div>
  );
}

export default Prediction;
