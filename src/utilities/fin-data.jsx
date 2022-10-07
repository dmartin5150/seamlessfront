const getFinCareTeam = async (requestDate) => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'date': requestDate})

      });
      if (response) {
        const data = await response.json();
        console.log(data);
        return data
      }
    } catch (e) {
      console.log("Error: ", e);
      return []
    }
  };

  export default getFinCareTeam;