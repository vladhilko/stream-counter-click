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
      newEventItem.classList.add("px-6", "py-2", "border-b", "border-gray-200", "w-full", "fade-in"); // Add the fade-in class here
      newEventItem.innerHTML = `<span class="font-semibold">Message:</span> ${data.message} <span class="font-semibold">Time:</span> ${data.created_at}`;

      // Use prepend to make the new item appear at the top; the fade-in effect is applied via CSS
      eventsList.prepend(newEventItem);

      // Update the events count with transition effect
      const eventsCount = document.getElementById('events-count');
      const currentCount = parseInt(eventsCount.textContent, 10);
      eventsCount.textContent = currentCount + 1;

      // Apply a temporary color change to highlight the update
      eventsCount.classList.add("updated");

      // Optionally, remove the color change after a few moments to revert to the original style
      setTimeout(() => {
        eventsCount.classList.remove("updated");
      }, 1500); // Adjust time as needed
    }
  }
});
