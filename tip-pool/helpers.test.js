describe("Utilities Test (with Setup & Tear-Down", function()
{
    beforeEach(function()
    {
        billAmtInput.value = 50;
        tipAmtInput.value = 12;
        submitPaymentInfo();
    });

    it("Should Calculate the Total Bill Amount of All Payments on sumPaymentTotal()", function()
    {
        billAmtInput.value = 100;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal("billAmt")).toEqual(150);
    });

    it("Should Calculate the Total Tip Amount of All Payments on sumPaymentTotal()", function()
    {
        billAmtInput.value = 100;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipAmt")).toEqual(42);
    });

    it("Should Calculate the Total Tip Percent of All Payments on sumPaymentTotal()", function()
    {
        expect(sumPaymentTotal("tipPercent")).toEqual(24);
        billAmtInput.value = 100;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipPercent")).toEqual(54);
    });

    it("Should Calculate the Tip Percentage of a Single Tip on calculateTipPercent()", function()
    {
        expect(calculateTipPercent(50, 15)).toEqual(24);
        expect(calculateTipPercent(100, 30)).toEqual(30);
    });

    it("Should Create and Append New td to tr on append(tr, value)", function()
    {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it("Should Create a Delete td and Append to tr on appendDeleteBtn(tr, type)", function () 
    {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function()
    {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});