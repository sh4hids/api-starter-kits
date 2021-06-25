let tasks = [];

function insert(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(data);
      resolve(data);
    }, 100);
  });
}

function update(id, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = tasks.findIndex((task) => task.id === id);
      if (index > -1) {
        tasks[index] = {
          ...tasks[index],
          ...data,
        };
        resolve(tasks[index]);
      } else {
        reject(new Error('Invalid id'));
      }
    }, 100);
  });
}

function findById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = tasks.find((task) => task.id === id);
      resolve(data);
    }, 100);
  });
}

function find(query = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = query.id
        ? tasks.filter((task) => task.id === query.id)
        : tasks;
      resolve(result);
    }, 100);
  });
}

function remove(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.filter((task) => task.id !== id);
      resolve(null);
    }, 100);
  });
}

export { insert, update, findById, find, remove };
