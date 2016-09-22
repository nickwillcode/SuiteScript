/**

 30 Day EOM

 **/

function beforeSubmitSalesOrder(type){

if (type == 'create' || type == 'edit')

    var invTerm = nlapiGetFieldValue('terms');

    	if (invTerm == '2')
        	{

                var newRecord = nlapiGetNewRecord();
         	var invDate = nlapiGetFieldValue('trandate');

         	//Converts the string to date and returns the date object.
                var tDate = nlapiStringToDate(invDate, 'datetz');

		var m = tDate.getMonth(); //current month
         	var y = tDate.getFullYear(); //current year

         	// DD.MM.YYYY

        	var currentFirstDate = '1/'+(m+1)+'/'+y; //current first date

                //Converts the string to date and returns the date object.
	      	var firstDate = nlapiStringToDate(currentFirstDate, 'datetz');

        	// Add 2 months to firstDate, then -1 day
         	var currentLastDate = nlapiAddDays(nlapiAddMonths(firstDate, 2),-1);

         	//Convert the date object back to a string
        	var postDate = nlapiDateToString(currentLastDate, 'datetz');

       		//Set the dudate field with the date created.
        	var field = newRecord.setFieldValue('duedate',postDate);

        	}

        else return true;

}
