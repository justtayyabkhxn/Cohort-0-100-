const z = require("zod");

const userDetails = {
    email: "tayyabkhangk4734@gmail.com",
    pass: "lo56",
    age: 18
}
const validateUser = (obj) => {
    const schema = z.object({
        email: z.string().email(),
        pass: z.string().min(8)
    });
    const response = schema.safeParse(obj);
    console.log(response);
}
validateUser(userDetails);