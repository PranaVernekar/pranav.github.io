function loadData() {
  fetch("My-App-LB-866926060.ap-south-1.elb.amazonaws.com") // Replace with your Load Balancer DNS
    .then(response => response.json())
    .then(data => {
      document.getElementById("data-output").innerText = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      console.error("Error fetching data:", err);
    });
}
