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
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
      const newEventItem = document.createElement('li');
      newEventItem.classList.add("px-6", "py-2", "border-b", "border-gray-200", "w-full");
      newEventItem.innerHTML = `<span class="font-semibold">Message:</span> ${data.message} <span class="font-semibold">Time:</span> ${data.created_at}`;
      eventsList.prepend(newEventItem);

      // Update the events count
      const eventsCount = document.getElementById('events-count');
      const currentCount = parseInt(eventsCount.textContent, 10);
      eventsCount.textContent = currentCount + 1;
    }
  }
});
