// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A:[B,C,D], B:[E,F], ... }
function bfs(adj, s, t) {
  // adj - смежный список
  // s - начальная вершина
  // t - пункт назначения

  // инициализируем очередь
  let queue = [];
  // добавляем s в очередь
  queue.push(s);
  // помечаем s как посещенную вершину во избежание повторного добавления в очередь
  s.visited = true;
  let dst = {};
  while (queue.length > 0) {
    let cur = queue[0];
    // удаляем первый (верхний) элемент из очереди
    let v = queue.shift();
    // abj[v] - соседи v
    for (let neighbor of adj[v]) {
      // если сосед не посещался
      if (!neighbor.visited) {
        // добавляем его в очередь
        queue.push(neighbor);
        // помечаем вершину как посещенную
        neighbor.visited = true;
        dst[neighbor] = (dst[cur] || 0) + 1;
        // если сосед является пунктом назначения, мы победили
        if (neighbor === t) return [true, dst[t]];
      }
    }
  }
  // если t не обнаружено, значит пункта назначения достичь невозможно
  return false;
}

const persons = {
  me: "me",
  bob: "bob",
  alice: "alice",
  claire: "claire",
  anuj: "anuj",
  peggy: "peggy",
  thom: "thom",
  jonny: "jonny",
  petr: "petr",
};

const adj = {
  [persons.me]: [persons.alice, persons.bob, persons.claire],
  [persons.bob]: [persons.anuj, persons.peggy],
  [persons.alice]: [persons.peggy],
  [persons.claire]: [persons.thom, persons.jonny],
  [persons.anuj]: [],
  [persons.peggy]: [],
  [persons.thom]: [],
  [persons.jonny]: [persons.petr],
  [persons.petr]: [],
};

const result = bfs(adj, persons.me, persons.petr);
console.log("result", result);
