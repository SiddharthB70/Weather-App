import { useEffect, useState } from "react";

const App = () => {
    const [country, setCountry] = useState("");

    const onChange = (e) => {
        setCountry(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={country}
                    onChange={onChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default App;
