import Swal from "sweetalert2";


export async function createAlert() {
    return (
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to create this!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, create it!"
        })
    )
};

// .then((result) => {
//     if (result.isConfirmed) {
//         Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//         });
//     }
// })