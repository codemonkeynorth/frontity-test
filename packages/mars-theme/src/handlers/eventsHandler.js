const eventsFunc = async ({ route, params, state, libraries }) => {
  
  // adding a handler clears the default state for this route
  // all items such as isArchive, isEventArchive etc have disappeared
  
  console.log("eventsFunc:")
  console.log("state =>", state.source.data[route])


}

const eventsHandler = {
  priority: 10,
  pattern: "/events",
  func: eventsFunc
};

export default eventsHandler

