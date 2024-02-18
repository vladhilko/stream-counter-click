import consumer from "./consumer"

consumer.subscriptions.create("EventsChannel", {
  connected() {
    console.log("Connected to the events channel");
  },

  disconnected() {
    console.log("Disconnected from the events channel");
  },

  received(data) {
    console.log("Received data:", data);
    // Dynamically update your webpage here
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
      const newEventItem = document.createElement('li');
      newEventItem.innerHTML = `Message: ${data.message}, Queue: ${data.message_queue}, Created at: ${data.created_at}`;
      eventsList.appendChild(newEventItem);
    }
  }
});
