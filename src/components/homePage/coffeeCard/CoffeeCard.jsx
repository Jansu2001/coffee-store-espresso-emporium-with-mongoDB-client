
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sure!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cofe => cofe._id !== _id)
                            setCoffees(remaining)

                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 p-3 bg-cyan-400 shadow-xl">
                <figure><img className="" src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Supplier: {supplier}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <Link to={`update-coffee/${_id}`}>

                                <button className="btn w-full">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;