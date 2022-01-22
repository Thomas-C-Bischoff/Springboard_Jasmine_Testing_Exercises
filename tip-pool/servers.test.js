describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('Should Not Add a New Server on submitServerInfo() with Empty Input', function()
  {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("Should Update #servertable on updateServerTable()", function()
  {
    submitServerInfo();
    updateServerTable();
    const currentList = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentList.length).toEqual(3);
    expect(currentList[0].innerText).toEqual('Alice');
    expect(currentList[1].innerText).toEqual('$0.00');
    expect(currentList[2].innerText).toEqual('X');
  });

  afterEach(function() 
  {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
