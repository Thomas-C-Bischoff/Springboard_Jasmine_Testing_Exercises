describe("Payments Test (with Setup & Tear-Down", function()
{
    beforeEach(function()
    {
        billAmtInput.value = 50;
        tipAmtInput.value = 12;
    });

    it("Should Add a New Payment to All Payments on submitPaymentInfo()", function()
    {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('12');
        expect(allPayments['payment1'].tipPercent).toEqual(24);
    });

    it("Should Not Add a New Payment on submitPaymentInfo() with Empty Input.", function()
    {
        billAmtInput.value = "";
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("Should Update Payment Table on appendPaymentTable()", function()
    {
        let currentPayment = createCurPayment();
        allPayments["payment1"] = currentPayment;
        let paymentTable = document.querySelectorAll('#paymentTable tbody tr td');
        expect(paymentTable.length).toEqual(4);
        expect(paymentTable[0].innerText).toEqual('$50');
        expect(paymentTable[1].innerText).toEqual('$12');
        expect(paymentTable[2].innerText).toEqual('%24');
        expect(paymentTable[3].innerText).toEqual('X');
    });

    it("Should Create a New Payment on createCurPayment()", function()
    {
        const expected = 
        {
            billAmt: "50",
            tipAmt: "12",
            tipPercent: 24
        }
        expect(createCurPayment()).toEqual(expected);
    });

    it("Should Not Create Payment with an Empty Input on createCurPayment()", function()
    {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        let currentPayment = createCurPayment();
        expect(currentPayment).toEqual(undefined);
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
        paymentId = 0;
        allPayments = {};
    });
});