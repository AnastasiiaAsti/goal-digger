export default function AddToListPage({ user, setUser }) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between mt-5">
                    <div className="sec3 col-4 rounded">
                        <p>Categories</p>
                        <ul>
                            <li>Travel</li>
                            <li>Exterience</li>
                            <li>Things</li>
                            <li>Skills</li>
                        </ul>
                    </div>
                    <div className="sec1 col-7 rounded">
                        <p>List of items</p>
                    </div>
                    
                </div>
                </div>
        </div>
    );
}