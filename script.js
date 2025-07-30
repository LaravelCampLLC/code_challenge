// create a function that take user_id as a param and get all posts and filter it by user_id
// hint: use async/await try-catch and fetch api and also (fetch and foreach)


const sendData = async () => {
  const data = {
    name: "Ahmed",
    email: "ahmed@example.com"
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

sendData();
