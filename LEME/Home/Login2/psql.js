const { Client } = require("pg");
const client = new Client({
    user:"postgres",
    host:"127.0.0.1",
    database:"leme",
    password:"mnnz1363",
    port:5432,
});

client.connect();

const username = document.getElementById("username");
const signUpEmail = document.getElementById("signupmail");
const signUpPassword = document.getElementById("signuppass");
const singupBtn = document.getElementById("signUp");

const query = {
    text:"INSERT INTO public.users (username, email, password) VALUES ('username.value', 'signUpEmail.value', 'signUpPassword')"
};
client
.query(query)
.then((res) => {
    console.log(res);
    client.end();
})
.catch((e) => console.error(e.stack));

singupBtn.addEventListener("click", query);
