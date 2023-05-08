
import Swal from 'sweetalert2';
const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addNewCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(addNewCoffee);


        // Send Data To the database using Backend
        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal({
                    title: "Success",
                    text: "User Added Successfully to Database",
                    icon: "success",
                    confirmbuttonText:'okay'
                  })
               
            })
    }


    return (
        <div className="bg-[#F4F3F0] px-20 pt-6 ">
            <h2 className="text-3xl text-center font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className="pt-4">
                {/* Form Name and Quantity Row */}
                <div className="lg:flex mb-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* Form Supplier and Taste Row */}
                <div className="lg:flex mb-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Coffee Supplier" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* Form Category and Details Row */}
                <div className="lg:flex mb-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* Form Photo URL  Row */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>

        </div>
    );
};

export default AddCoffee;