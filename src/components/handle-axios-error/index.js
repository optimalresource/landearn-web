export const handleAxiosErrors = (error) => {
    if (typeof error === "object" && error !== null) {

        for(const key in error){
            if(typeof error[key] === "array") {
                error[key].map((err, index) => {

                })
            }
        }
    }
};
