var DataTypes = require("sequelize").DataTypes;
var _accountlist = require("./accountlist");
var _accountlist_parent = require("./accountlist_parent");
var _accounttypes = require("./accounttypes");
var _adj_new_sku = require("./adj_new_sku");
var _adj_osdays = require("./adj_osdays");
var _atpurchase_default_order_mode = require("./atpurchase_default_order_mode");
var _atpurchase_force_format = require("./atpurchase_force_format");
var _atpurchaseheader = require("./atpurchaseheader");
var _atpurchaseline = require("./atpurchaseline");
var _atskippedproducts = require("./atskippedproducts");
var _attachments = require("./attachments");
var _autoorderschedule = require("./autoorderschedule");
var _autopurchaselog = require("./autopurchaselog");
var _autotransferschedule = require("./autotransferschedule");
var _backorderline = require("./backorderline");
var _backup_complete = require("./backup_complete");
var _backuphistory = require("./backuphistory");
var _backupservers = require("./backupservers");
var _bankdepositsheader = require("./bankdepositsheader");
var _bankdepositsline = require("./bankdepositsline");
var _bankinfo = require("./bankinfo");
var _bill_instruction = require("./bill_instruction");
var _billcredit_supplierforcevat = require("./billcredit_supplierforcevat");
var _billcreditheader = require("./billcreditheader");
var _billcreditheader_2307 = require("./billcreditheader_2307");
var _billcreditheader_2307_defaultdate = require("./billcreditheader_2307_defaultdate");
var _billcreditheader_2307_whiltelist = require("./billcreditheader_2307_whiltelist");
var _billcreditheader_ewt = require("./billcreditheader_ewt");
var _billcreditline = require("./billcreditline");
var _billcreditline_2 = require("./billcreditline_2");
var _billheader = require("./billheader");
var _billheader_vat = require("./billheader_vat");
var _billheader_vat_override = require("./billheader_vat_override");
var _billline = require("./billline");
var _billlinecolumns = require("./billlinecolumns");
var _billpaidouts = require("./billpaidouts");
var _billpaymentheader = require("./billpaymentheader");
var _billpaymentheader2 = require("./billpaymentheader2");
var _billpaymentline = require("./billpaymentline");
var _billpaymentlinecolumns = require("./billpaymentlinecolumns");
var _billterms = require("./billterms");
var _cctvrecords = require("./cctvrecords");
var _checknumbers = require("./checknumbers");
var _cms_customers = require("./cms_customers");
var _cms_saleheader = require("./cms_saleheader");
var _cms_saleline = require("./cms_saleline");
var _cogs = require("./cogs");
var _competitorprices = require("./competitorprices");
var _competitorslist = require("./competitorslist");
var _customers = require("./customers");
var _customers2 = require("./customers2");
var _customers_terms = require("./customers_terms");
var _dealsheader = require("./dealsheader");
var _dealsimport = require("./dealsimport");
var _dealsline = require("./dealsline");
var _departments = require("./departments");
var _discgroups = require("./discgroups");
var _discgroups_log = require("./discgroups_log");
var _discgroups_monthly = require("./discgroups_monthly");
var _discgroupsitems = require("./discgroupsitems");
var _discgroupsitems_2 = require("./discgroupsitems_2");
var _discgroupsitems_multiple = require("./discgroupsitems_multiple");
var _discounts = require("./discounts");
var _discounts_customers_central = require("./discounts_customers_central");
var _discounts_customers_local = require("./discounts_customers_local");
var _discounts_prescriber_central = require("./discounts_prescriber_central");
var _discounts_prescriber_local = require("./discounts_prescriber_local");
var _discounts_reimbursable = require("./discounts_reimbursable");
var _emailer = require("./emailer");
var _employee_masterlist = require("./employee_masterlist");
var _employeeincentives = require("./employeeincentives");
var _employeeincentives_header = require("./employeeincentives_header");
var _employeeincentives_line = require("./employeeincentives_line");
var _employeelevels = require("./employeelevels");
var _employees = require("./employees");
var _employeestime = require("./employeestime");
var _expiryreport = require("./expiryreport");
var _genericlist = require("./genericlist");
var _generics = require("./generics");
var _gitupdates = require("./gitupdates");
var _global_sales_qry = require("./global_sales_qry");
var _globalsettings = require("./globalsettings");
var _healthincentives = require("./healthincentives");
var _inventory_value_fifo = require("./inventory_value_fifo");
var _inventoryadjustheader = require("./inventoryadjustheader");
var _inventoryadjustline = require("./inventoryadjustline");
var _inventoryadjusttime = require("./inventoryadjusttime");
var _inventoryaudits = require("./inventoryaudits");
var _inventorycountsheader = require("./inventorycountsheader");
var _inventorycountsline = require("./inventorycountsline");
var _inventoryinheader = require("./inventoryinheader");
var _inventoryinline = require("./inventoryinline");
var _inventoryinlinecustom = require("./inventoryinlinecustom");
var _inventoryoutcheckline = require("./inventoryoutcheckline");
var _inventoryoutheader = require("./inventoryoutheader");
var _inventoryoutheader_autoprint = require("./inventoryoutheader_autoprint");
var _inventoryoutline = require("./inventoryoutline");
var _inventoryoutline_pick_time = require("./inventoryoutline_pick_time");
var _inventoryoutlinecustom = require("./inventoryoutlinecustom");
var _inventoryoutlog = require("./inventoryoutlog");
var _inventorypulloutheader = require("./inventorypulloutheader");
var _inventorypulloutline = require("./inventorypulloutline");
var _invoiceheader = require("./invoiceheader");
var _invoiceline = require("./invoiceline");
var _invoicepaymentheader = require("./invoicepaymentheader");
var _invoicepaymentline = require("./invoicepaymentline");
var _iv = require("./iv");
var _journalheader = require("./journalheader");
var _journalheader2 = require("./journalheader2");
var _journalline = require("./journalline");
var _journalline2 = require("./journalline2");
var _journalline2_adjustment_log = require("./journalline2_adjustment_log");
var _lazorders = require("./lazorders");
var _locations = require("./locations");
var _loyaltyproducts = require("./loyaltyproducts");
var _memorizedfilters = require("./memorizedfilters");
var _minimumuom = require("./minimumuom");
var _oslist = require("./oslist");
var _paidouts = require("./paidouts");
var _paidouts2 = require("./paidouts2");
var _paidouts_names = require("./paidouts_names");
var _paidouts_reconcile_override = require("./paidouts_reconcile_override");
var _payment_modes_conversion_list = require("./payment_modes_conversion_list");
var _paymentline = require("./paymentline");
var _paymentmode_auto_invoice = require("./paymentmode_auto_invoice");
var _paymentmodes = require("./paymentmodes");
var _paymentmodes_conversion = require("./paymentmodes_conversion");
var _paymentmodes_conversion_old = require("./paymentmodes_conversion_old");
var _pidclasses = require("./pidclasses");
var _potentialtransfers = require("./potentialtransfers");
var _pricechanges = require("./pricechanges");
var _priceeditheader = require("./priceeditheader");
var _priceeditline = require("./priceeditline");
var _priceeditproducts = require("./priceeditproducts");
var _pricegroup = require("./pricegroup");
var _pricelevel = require("./pricelevel");
var _pricelist_generic_header = require("./pricelist_generic_header");
var _pricelist_generic_list = require("./pricelist_generic_list");
var _pricelist_generic_suppliers = require("./pricelist_generic_suppliers");
var _principals = require("./principals");
var _productchangelog = require("./productchangelog");
var _productgroups = require("./productgroups");
var _productgroupsitems = require("./productgroupsitems");
var _productmultiples = require("./productmultiples");
var _productmultiples_purchasing = require("./productmultiples_purchasing");
var _productmultiples_sharing = require("./productmultiples_sharing");
var _products = require("./products");
var _products_abc = require("./products_abc");
var _products_abc_skip = require("./products_abc_skip");
var _products_barcode_secondary = require("./products_barcode_secondary");
var _products_branch_maintained = require("./products_branch_maintained");
var _products_competitor = require("./products_competitor");
var _products_lazada = require("./products_lazada");
var _products_mandatory = require("./products_mandatory");
var _products_merged = require("./products_merged");
var _products_minimumordersize = require("./products_minimumordersize");
var _products_mrp = require("./products_mrp");
var _products_outofstock_limiter = require("./products_outofstock_limiter");
var _products_purchasetax = require("./products_purchasetax");
var _products_shopee = require("./products_shopee");
var _products_shopify_header = require("./products_shopify_header");
var _products_shopify_header_backup = require("./products_shopify_header_backup");
var _products_shopify_header_cache = require("./products_shopify_header_cache");
var _products_shopify_line = require("./products_shopify_line");
var _products_shopify_line_backup = require("./products_shopify_line_backup");
var _products_size = require("./products_size");
var _products_specialprices = require("./products_specialprices");
var _products_totalsold = require("./products_totalsold");
var _products_uom_list = require("./products_uom_list");
var _products_uom_purchasing = require("./products_uom_purchasing");
var _products_vatpurchased = require("./products_vatpurchased");
var _products_whlocations = require("./products_whlocations");
var _productscustom = require("./productscustom");
var _productsmaterials = require("./productsmaterials");
var _productsrefsap = require("./productsrefsap");
var _productsrefshp = require("./productsrefshp");
var _productsseniorstatus = require("./productsseniorstatus");
var _producttagnames = require("./producttagnames");
var _producttags = require("./producttags");
var _producttype = require("./producttype");
var _producttypelist = require("./producttypelist");
var _productuoms = require("./productuoms");
var _promogroups = require("./promogroups");
var _promogroupsitems = require("./promogroupsitems");
var _purchase_backlog = require("./purchase_backlog");
var _purchaseheader = require("./purchaseheader");
var _purchaseheader_global = require("./purchaseheader_global");
var _purchaseheader_splitparent = require("./purchaseheader_splitparent");
var _purchaseline = require("./purchaseline");
var _purchaselinecolumns = require("./purchaselinecolumns");
var _purchaselinecustom = require("./purchaselinecustom");
var _purchaselinediscount = require("./purchaselinediscount");
var _query_sync = require("./query_sync");
var _querylog = require("./querylog");
var _received_and_adjusted = require("./received_and_adjusted");
var _received_and_transferred = require("./received_and_transferred");
var _receivepayments = require("./receivepayments");
var _reminderlist = require("./reminderlist");
var _resetcounter = require("./resetcounter");
var _returnheader = require("./returnheader");
var _returnline = require("./returnline");
var _salaryassigned = require("./salaryassigned");
var _salarygrade = require("./salarygrade");
var _salaryscale = require("./salaryscale");
var _sale_order_numbering = require("./sale_order_numbering");
var _sale_readings = require("./sale_readings");
var _saleheader = require("./saleheader");
var _saleline = require("./saleline");
var _saleline2 = require("./saleline2");
var _saleline_discount_password = require("./saleline_discount_password");
var _saleorderheader = require("./saleorderheader");
var _saleorderline = require("./saleorderline");
var _saleorderline2 = require("./saleorderline2");
var _saleorderline_discount_password = require("./saleorderline_discount_password");
var _sales2 = require("./sales2");
var _sales_salesorder_tagging = require("./sales_salesorder_tagging");
var _scd_claiming = require("./scd_claiming");
var _scd_claiming_methods = require("./scd_claiming_methods");
var _scd_per_month_principalid = require("./scd_per_month_principalid");
var _scd_per_month_supplierid = require("./scd_per_month_supplierid");
var _servergroups = require("./servergroups");
var _servergroupsline = require("./servergroupsline");
var _serverinfo = require("./serverinfo");
var _servers = require("./servers");
var _servers2 = require("./servers2");
var _servers_buffers = require("./servers_buffers");
var _servers_closed = require("./servers_closed");
var _serversout = require("./serversout");
var _serversout2_tinnumber = require("./serversout2_tinnumber");
var _serversout_taxinfo = require("./serversout_taxinfo");
var _session_readings = require("./session_readings");
var _soa_ghl = require("./soa_ghl");
var _soa_ghl_duplicate = require("./soa_ghl_duplicate");
var _soa_ghl_items = require("./soa_ghl_items");
var _soa_header = require("./soa_header");
var _soa_line = require("./soa_line");
var _soa_line_deductions = require("./soa_line_deductions");
var _soinventory = require("./soinventory");
var _status = require("./status");
var _stockrequestline = require("./stockrequestline");
var _stocksharing_uoms = require("./stocksharing_uoms");
var _stocksharingdirect = require("./stocksharingdirect");
var _stocksharingnonmoving = require("./stocksharingnonmoving");
var _supplierclasses = require("./supplierclasses");
var _suppliergroupheader = require("./suppliergroupheader");
var _suppliergrouplist = require("./suppliergrouplist");
var _supplierinvoiceformat = require("./supplierinvoiceformat");
var _suppliers = require("./suppliers");
var _suppliers2 = require("./suppliers2");
var _suppliers3 = require("./suppliers3");
var _suppliers4 = require("./suppliers4");
var _suppliers5_uompreference = require("./suppliers5_uompreference");
var _supplierstax = require("./supplierstax");
var _taxcodes = require("./taxcodes");
var _taxcodes_default = require("./taxcodes_default");
var _taxes = require("./taxes");
var _terminals = require("./terminals");
var _terminals2 = require("./terminals2");
var _terminaltypes = require("./terminaltypes");
var _whexptransferred = require("./whexptransferred");
var _whlocations = require("./whlocations");

function initModels(sequelize) {
  var accountlist = _accountlist(sequelize, DataTypes);
  var accountlist_parent = _accountlist_parent(sequelize, DataTypes);
  var accounttypes = _accounttypes(sequelize, DataTypes);
  var adj_new_sku = _adj_new_sku(sequelize, DataTypes);
  var adj_osdays = _adj_osdays(sequelize, DataTypes);
  var atpurchase_default_order_mode = _atpurchase_default_order_mode(sequelize, DataTypes);
  var atpurchase_force_format = _atpurchase_force_format(sequelize, DataTypes);
  var atpurchaseheader = _atpurchaseheader(sequelize, DataTypes);
  var atpurchaseline = _atpurchaseline(sequelize, DataTypes);
  var atskippedproducts = _atskippedproducts(sequelize, DataTypes);
  var attachments = _attachments(sequelize, DataTypes);
  var autoorderschedule = _autoorderschedule(sequelize, DataTypes);
  var autopurchaselog = _autopurchaselog(sequelize, DataTypes);
  var autotransferschedule = _autotransferschedule(sequelize, DataTypes);
  var backorderline = _backorderline(sequelize, DataTypes);
  var backup_complete = _backup_complete(sequelize, DataTypes);
  var backuphistory = _backuphistory(sequelize, DataTypes);
  var backupservers = _backupservers(sequelize, DataTypes);
  var bankdepositsheader = _bankdepositsheader(sequelize, DataTypes);
  var bankdepositsline = _bankdepositsline(sequelize, DataTypes);
  var bankinfo = _bankinfo(sequelize, DataTypes);
  var bill_instruction = _bill_instruction(sequelize, DataTypes);
  var billcredit_supplierforcevat = _billcredit_supplierforcevat(sequelize, DataTypes);
  var billcreditheader = _billcreditheader(sequelize, DataTypes);
  var billcreditheader_2307 = _billcreditheader_2307(sequelize, DataTypes);
  var billcreditheader_2307_defaultdate = _billcreditheader_2307_defaultdate(sequelize, DataTypes);
  var billcreditheader_2307_whiltelist = _billcreditheader_2307_whiltelist(sequelize, DataTypes);
  var billcreditheader_ewt = _billcreditheader_ewt(sequelize, DataTypes);
  var billcreditline = _billcreditline(sequelize, DataTypes);
  var billcreditline_2 = _billcreditline_2(sequelize, DataTypes);
  var billheader = _billheader(sequelize, DataTypes);
  var billheader_vat = _billheader_vat(sequelize, DataTypes);
  var billheader_vat_override = _billheader_vat_override(sequelize, DataTypes);
  var billline = _billline(sequelize, DataTypes);
  var billlinecolumns = _billlinecolumns(sequelize, DataTypes);
  var billpaidouts = _billpaidouts(sequelize, DataTypes);
  var billpaymentheader = _billpaymentheader(sequelize, DataTypes);
  var billpaymentheader2 = _billpaymentheader2(sequelize, DataTypes);
  var billpaymentline = _billpaymentline(sequelize, DataTypes);
  var billpaymentlinecolumns = _billpaymentlinecolumns(sequelize, DataTypes);
  var billterms = _billterms(sequelize, DataTypes);
  var cctvrecords = _cctvrecords(sequelize, DataTypes);
  var checknumbers = _checknumbers(sequelize, DataTypes);
  var cms_customers = _cms_customers(sequelize, DataTypes);
  var cms_saleheader = _cms_saleheader(sequelize, DataTypes);
  var cms_saleline = _cms_saleline(sequelize, DataTypes);
  var cogs = _cogs(sequelize, DataTypes);
  var competitorprices = _competitorprices(sequelize, DataTypes);
  var competitorslist = _competitorslist(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var customers2 = _customers2(sequelize, DataTypes);
  var customers_terms = _customers_terms(sequelize, DataTypes);
  var dealsheader = _dealsheader(sequelize, DataTypes);
  var dealsimport = _dealsimport(sequelize, DataTypes);
  var dealsline = _dealsline(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var discgroups = _discgroups(sequelize, DataTypes);
  var discgroups_log = _discgroups_log(sequelize, DataTypes);
  var discgroups_monthly = _discgroups_monthly(sequelize, DataTypes);
  var discgroupsitems = _discgroupsitems(sequelize, DataTypes);
  var discgroupsitems_2 = _discgroupsitems_2(sequelize, DataTypes);
  var discgroupsitems_multiple = _discgroupsitems_multiple(sequelize, DataTypes);
  var discounts = _discounts(sequelize, DataTypes);
  var discounts_customers_central = _discounts_customers_central(sequelize, DataTypes);
  var discounts_customers_local = _discounts_customers_local(sequelize, DataTypes);
  var discounts_prescriber_central = _discounts_prescriber_central(sequelize, DataTypes);
  var discounts_prescriber_local = _discounts_prescriber_local(sequelize, DataTypes);
  var discounts_reimbursable = _discounts_reimbursable(sequelize, DataTypes);
  var emailer = _emailer(sequelize, DataTypes);
  var employee_masterlist = _employee_masterlist(sequelize, DataTypes);
  var employeeincentives = _employeeincentives(sequelize, DataTypes);
  var employeeincentives_header = _employeeincentives_header(sequelize, DataTypes);
  var employeeincentives_line = _employeeincentives_line(sequelize, DataTypes);
  var employeelevels = _employeelevels(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var employeestime = _employeestime(sequelize, DataTypes);
  var expiryreport = _expiryreport(sequelize, DataTypes);
  var genericlist = _genericlist(sequelize, DataTypes);
  var generics = _generics(sequelize, DataTypes);
  var gitupdates = _gitupdates(sequelize, DataTypes);
  var global_sales_qry = _global_sales_qry(sequelize, DataTypes);
  var globalsettings = _globalsettings(sequelize, DataTypes);
  var healthincentives = _healthincentives(sequelize, DataTypes);
  var inventory_value_fifo = _inventory_value_fifo(sequelize, DataTypes);
  var inventoryadjustheader = _inventoryadjustheader(sequelize, DataTypes);
  var inventoryadjustline = _inventoryadjustline(sequelize, DataTypes);
  var inventoryadjusttime = _inventoryadjusttime(sequelize, DataTypes);
  var inventoryaudits = _inventoryaudits(sequelize, DataTypes);
  var inventorycountsheader = _inventorycountsheader(sequelize, DataTypes);
  var inventorycountsline = _inventorycountsline(sequelize, DataTypes);
  var inventoryinheader = _inventoryinheader(sequelize, DataTypes);
  var inventoryinline = _inventoryinline(sequelize, DataTypes);
  var inventoryinlinecustom = _inventoryinlinecustom(sequelize, DataTypes);
  var inventoryoutcheckline = _inventoryoutcheckline(sequelize, DataTypes);
  var inventoryoutheader = _inventoryoutheader(sequelize, DataTypes);
  var inventoryoutheader_autoprint = _inventoryoutheader_autoprint(sequelize, DataTypes);
  var inventoryoutline = _inventoryoutline(sequelize, DataTypes);
  var inventoryoutline_pick_time = _inventoryoutline_pick_time(sequelize, DataTypes);
  var inventoryoutlinecustom = _inventoryoutlinecustom(sequelize, DataTypes);
  var inventoryoutlog = _inventoryoutlog(sequelize, DataTypes);
  var inventorypulloutheader = _inventorypulloutheader(sequelize, DataTypes);
  var inventorypulloutline = _inventorypulloutline(sequelize, DataTypes);
  var invoiceheader = _invoiceheader(sequelize, DataTypes);
  var invoiceline = _invoiceline(sequelize, DataTypes);
  var invoicepaymentheader = _invoicepaymentheader(sequelize, DataTypes);
  var invoicepaymentline = _invoicepaymentline(sequelize, DataTypes);
  var iv = _iv(sequelize, DataTypes);
  var journalheader = _journalheader(sequelize, DataTypes);
  var journalheader2 = _journalheader2(sequelize, DataTypes);
  var journalline = _journalline(sequelize, DataTypes);
  var journalline2 = _journalline2(sequelize, DataTypes);
  var journalline2_adjustment_log = _journalline2_adjustment_log(sequelize, DataTypes);
  var lazorders = _lazorders(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var loyaltyproducts = _loyaltyproducts(sequelize, DataTypes);
  var memorizedfilters = _memorizedfilters(sequelize, DataTypes);
  var minimumuom = _minimumuom(sequelize, DataTypes);
  var oslist = _oslist(sequelize, DataTypes);
  var paidouts = _paidouts(sequelize, DataTypes);
  var paidouts2 = _paidouts2(sequelize, DataTypes);
  var paidouts_names = _paidouts_names(sequelize, DataTypes);
  var paidouts_reconcile_override = _paidouts_reconcile_override(sequelize, DataTypes);
  var payment_modes_conversion_list = _payment_modes_conversion_list(sequelize, DataTypes);
  var paymentline = _paymentline(sequelize, DataTypes);
  var paymentmode_auto_invoice = _paymentmode_auto_invoice(sequelize, DataTypes);
  var paymentmodes = _paymentmodes(sequelize, DataTypes);
  var paymentmodes_conversion = _paymentmodes_conversion(sequelize, DataTypes);
  var paymentmodes_conversion_old = _paymentmodes_conversion_old(sequelize, DataTypes);
  var pidclasses = _pidclasses(sequelize, DataTypes);
  var potentialtransfers = _potentialtransfers(sequelize, DataTypes);
  var pricechanges = _pricechanges(sequelize, DataTypes);
  var priceeditheader = _priceeditheader(sequelize, DataTypes);
  var priceeditline = _priceeditline(sequelize, DataTypes);
  var priceeditproducts = _priceeditproducts(sequelize, DataTypes);
  var pricegroup = _pricegroup(sequelize, DataTypes);
  var pricelevel = _pricelevel(sequelize, DataTypes);
  var pricelist_generic_header = _pricelist_generic_header(sequelize, DataTypes);
  var pricelist_generic_list = _pricelist_generic_list(sequelize, DataTypes);
  var pricelist_generic_suppliers = _pricelist_generic_suppliers(sequelize, DataTypes);
  var principals = _principals(sequelize, DataTypes);
  var productchangelog = _productchangelog(sequelize, DataTypes);
  var productgroups = _productgroups(sequelize, DataTypes);
  var productgroupsitems = _productgroupsitems(sequelize, DataTypes);
  var productmultiples = _productmultiples(sequelize, DataTypes);
  var productmultiples_purchasing = _productmultiples_purchasing(sequelize, DataTypes);
  var productmultiples_sharing = _productmultiples_sharing(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_abc = _products_abc(sequelize, DataTypes);
  var products_abc_skip = _products_abc_skip(sequelize, DataTypes);
  var products_barcode_secondary = _products_barcode_secondary(sequelize, DataTypes);
  var products_branch_maintained = _products_branch_maintained(sequelize, DataTypes);
  var products_competitor = _products_competitor(sequelize, DataTypes);
  var products_lazada = _products_lazada(sequelize, DataTypes);
  var products_mandatory = _products_mandatory(sequelize, DataTypes);
  var products_merged = _products_merged(sequelize, DataTypes);
  var products_minimumordersize = _products_minimumordersize(sequelize, DataTypes);
  var products_mrp = _products_mrp(sequelize, DataTypes);
  var products_outofstock_limiter = _products_outofstock_limiter(sequelize, DataTypes);
  var products_purchasetax = _products_purchasetax(sequelize, DataTypes);
  var products_shopee = _products_shopee(sequelize, DataTypes);
  var products_shopify_header = _products_shopify_header(sequelize, DataTypes);
  var products_shopify_header_backup = _products_shopify_header_backup(sequelize, DataTypes);
  var products_shopify_header_cache = _products_shopify_header_cache(sequelize, DataTypes);
  var products_shopify_line = _products_shopify_line(sequelize, DataTypes);
  var products_shopify_line_backup = _products_shopify_line_backup(sequelize, DataTypes);
  var products_size = _products_size(sequelize, DataTypes);
  var products_specialprices = _products_specialprices(sequelize, DataTypes);
  var products_totalsold = _products_totalsold(sequelize, DataTypes);
  var products_uom_list = _products_uom_list(sequelize, DataTypes);
  var products_uom_purchasing = _products_uom_purchasing(sequelize, DataTypes);
  var products_vatpurchased = _products_vatpurchased(sequelize, DataTypes);
  var products_whlocations = _products_whlocations(sequelize, DataTypes);
  var productscustom = _productscustom(sequelize, DataTypes);
  var productsmaterials = _productsmaterials(sequelize, DataTypes);
  var productsrefsap = _productsrefsap(sequelize, DataTypes);
  var productsrefshp = _productsrefshp(sequelize, DataTypes);
  var productsseniorstatus = _productsseniorstatus(sequelize, DataTypes);
  var producttagnames = _producttagnames(sequelize, DataTypes);
  var producttags = _producttags(sequelize, DataTypes);
  var producttype = _producttype(sequelize, DataTypes);
  var producttypelist = _producttypelist(sequelize, DataTypes);
  var productuoms = _productuoms(sequelize, DataTypes);
  var promogroups = _promogroups(sequelize, DataTypes);
  var promogroupsitems = _promogroupsitems(sequelize, DataTypes);
  var purchase_backlog = _purchase_backlog(sequelize, DataTypes);
  var purchaseheader = _purchaseheader(sequelize, DataTypes);
  var purchaseheader_global = _purchaseheader_global(sequelize, DataTypes);
  var purchaseheader_splitparent = _purchaseheader_splitparent(sequelize, DataTypes);
  var purchaseline = _purchaseline(sequelize, DataTypes);
  var purchaselinecolumns = _purchaselinecolumns(sequelize, DataTypes);
  var purchaselinecustom = _purchaselinecustom(sequelize, DataTypes);
  var purchaselinediscount = _purchaselinediscount(sequelize, DataTypes);
  var query_sync = _query_sync(sequelize, DataTypes);
  var querylog = _querylog(sequelize, DataTypes);
  var received_and_adjusted = _received_and_adjusted(sequelize, DataTypes);
  var received_and_transferred = _received_and_transferred(sequelize, DataTypes);
  var receivepayments = _receivepayments(sequelize, DataTypes);
  var reminderlist = _reminderlist(sequelize, DataTypes);
  var resetcounter = _resetcounter(sequelize, DataTypes);
  var returnheader = _returnheader(sequelize, DataTypes);
  var returnline = _returnline(sequelize, DataTypes);
  var salaryassigned = _salaryassigned(sequelize, DataTypes);
  var salarygrade = _salarygrade(sequelize, DataTypes);
  var salaryscale = _salaryscale(sequelize, DataTypes);
  var sale_order_numbering = _sale_order_numbering(sequelize, DataTypes);
  var sale_readings = _sale_readings(sequelize, DataTypes);
  var saleheader = _saleheader(sequelize, DataTypes);
  var saleline = _saleline(sequelize, DataTypes);
  var saleline2 = _saleline2(sequelize, DataTypes);
  var saleline_discount_password = _saleline_discount_password(sequelize, DataTypes);
  var saleorderheader = _saleorderheader(sequelize, DataTypes);
  var saleorderline = _saleorderline(sequelize, DataTypes);
  var saleorderline2 = _saleorderline2(sequelize, DataTypes);
  var saleorderline_discount_password = _saleorderline_discount_password(sequelize, DataTypes);
  var sales2 = _sales2(sequelize, DataTypes);
  var sales_salesorder_tagging = _sales_salesorder_tagging(sequelize, DataTypes);
  var scd_claiming = _scd_claiming(sequelize, DataTypes);
  var scd_claiming_methods = _scd_claiming_methods(sequelize, DataTypes);
  var scd_per_month_principalid = _scd_per_month_principalid(sequelize, DataTypes);
  var scd_per_month_supplierid = _scd_per_month_supplierid(sequelize, DataTypes);
  var servergroups = _servergroups(sequelize, DataTypes);
  var servergroupsline = _servergroupsline(sequelize, DataTypes);
  var serverinfo = _serverinfo(sequelize, DataTypes);
  var servers = _servers(sequelize, DataTypes);
  var servers2 = _servers2(sequelize, DataTypes);
  var servers_buffers = _servers_buffers(sequelize, DataTypes);
  var servers_closed = _servers_closed(sequelize, DataTypes);
  var serversout = _serversout(sequelize, DataTypes);
  var serversout2_tinnumber = _serversout2_tinnumber(sequelize, DataTypes);
  var serversout_taxinfo = _serversout_taxinfo(sequelize, DataTypes);
  var session_readings = _session_readings(sequelize, DataTypes);
  var soa_ghl = _soa_ghl(sequelize, DataTypes);
  var soa_ghl_duplicate = _soa_ghl_duplicate(sequelize, DataTypes);
  var soa_ghl_items = _soa_ghl_items(sequelize, DataTypes);
  var soa_header = _soa_header(sequelize, DataTypes);
  var soa_line = _soa_line(sequelize, DataTypes);
  var soa_line_deductions = _soa_line_deductions(sequelize, DataTypes);
  var soinventory = _soinventory(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var stockrequestline = _stockrequestline(sequelize, DataTypes);
  var stocksharing_uoms = _stocksharing_uoms(sequelize, DataTypes);
  var stocksharingdirect = _stocksharingdirect(sequelize, DataTypes);
  var stocksharingnonmoving = _stocksharingnonmoving(sequelize, DataTypes);
  var supplierclasses = _supplierclasses(sequelize, DataTypes);
  var suppliergroupheader = _suppliergroupheader(sequelize, DataTypes);
  var suppliergrouplist = _suppliergrouplist(sequelize, DataTypes);
  var supplierinvoiceformat = _supplierinvoiceformat(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var suppliers2 = _suppliers2(sequelize, DataTypes);
  var suppliers3 = _suppliers3(sequelize, DataTypes);
  var suppliers4 = _suppliers4(sequelize, DataTypes);
  var suppliers5_uompreference = _suppliers5_uompreference(sequelize, DataTypes);
  var supplierstax = _supplierstax(sequelize, DataTypes);
  var taxcodes = _taxcodes(sequelize, DataTypes);
  var taxcodes_default = _taxcodes_default(sequelize, DataTypes);
  var taxes = _taxes(sequelize, DataTypes);
  var terminals = _terminals(sequelize, DataTypes);
  var terminals2 = _terminals2(sequelize, DataTypes);
  var terminaltypes = _terminaltypes(sequelize, DataTypes);
  var whexptransferred = _whexptransferred(sequelize, DataTypes);
  var whlocations = _whlocations(sequelize, DataTypes);


  return {
    accountlist,
    accountlist_parent,
    accounttypes,
    adj_new_sku,
    adj_osdays,
    atpurchase_default_order_mode,
    atpurchase_force_format,
    atpurchaseheader,
    atpurchaseline,
    atskippedproducts,
    attachments,
    autoorderschedule,
    autopurchaselog,
    autotransferschedule,
    backorderline,
    backup_complete,
    backuphistory,
    backupservers,
    bankdepositsheader,
    bankdepositsline,
    bankinfo,
    bill_instruction,
    billcredit_supplierforcevat,
    billcreditheader,
    billcreditheader_2307,
    billcreditheader_2307_defaultdate,
    billcreditheader_2307_whiltelist,
    billcreditheader_ewt,
    billcreditline,
    billcreditline_2,
    billheader,
    billheader_vat,
    billheader_vat_override,
    billline,
    billlinecolumns,
    billpaidouts,
    billpaymentheader,
    billpaymentheader2,
    billpaymentline,
    billpaymentlinecolumns,
    billterms,
    cctvrecords,
    checknumbers,
    cms_customers,
    cms_saleheader,
    cms_saleline,
    cogs,
    competitorprices,
    competitorslist,
    customers,
    customers2,
    customers_terms,
    dealsheader,
    dealsimport,
    dealsline,
    departments,
    discgroups,
    discgroups_log,
    discgroups_monthly,
    discgroupsitems,
    discgroupsitems_2,
    discgroupsitems_multiple,
    discounts,
    discounts_customers_central,
    discounts_customers_local,
    discounts_prescriber_central,
    discounts_prescriber_local,
    discounts_reimbursable,
    emailer,
    employee_masterlist,
    employeeincentives,
    employeeincentives_header,
    employeeincentives_line,
    employeelevels,
    employees,
    employeestime,
    expiryreport,
    genericlist,
    generics,
    gitupdates,
    global_sales_qry,
    globalsettings,
    healthincentives,
    inventory_value_fifo,
    inventoryadjustheader,
    inventoryadjustline,
    inventoryadjusttime,
    inventoryaudits,
    inventorycountsheader,
    inventorycountsline,
    inventoryinheader,
    inventoryinline,
    inventoryinlinecustom,
    inventoryoutcheckline,
    inventoryoutheader,
    inventoryoutheader_autoprint,
    inventoryoutline,
    inventoryoutline_pick_time,
    inventoryoutlinecustom,
    inventoryoutlog,
    inventorypulloutheader,
    inventorypulloutline,
    invoiceheader,
    invoiceline,
    invoicepaymentheader,
    invoicepaymentline,
    iv,
    journalheader,
    journalheader2,
    journalline,
    journalline2,
    journalline2_adjustment_log,
    lazorders,
    locations,
    loyaltyproducts,
    memorizedfilters,
    minimumuom,
    oslist,
    paidouts,
    paidouts2,
    paidouts_names,
    paidouts_reconcile_override,
    payment_modes_conversion_list,
    paymentline,
    paymentmode_auto_invoice,
    paymentmodes,
    paymentmodes_conversion,
    paymentmodes_conversion_old,
    pidclasses,
    potentialtransfers,
    pricechanges,
    priceeditheader,
    priceeditline,
    priceeditproducts,
    pricegroup,
    pricelevel,
    pricelist_generic_header,
    pricelist_generic_list,
    pricelist_generic_suppliers,
    principals,
    productchangelog,
    productgroups,
    productgroupsitems,
    productmultiples,
    productmultiples_purchasing,
    productmultiples_sharing,
    products,
    products_abc,
    products_abc_skip,
    products_barcode_secondary,
    products_branch_maintained,
    products_competitor,
    products_lazada,
    products_mandatory,
    products_merged,
    products_minimumordersize,
    products_mrp,
    products_outofstock_limiter,
    products_purchasetax,
    products_shopee,
    products_shopify_header,
    products_shopify_header_backup,
    products_shopify_header_cache,
    products_shopify_line,
    products_shopify_line_backup,
    products_size,
    products_specialprices,
    products_totalsold,
    products_uom_list,
    products_uom_purchasing,
    products_vatpurchased,
    products_whlocations,
    productscustom,
    productsmaterials,
    productsrefsap,
    productsrefshp,
    productsseniorstatus,
    producttagnames,
    producttags,
    producttype,
    producttypelist,
    productuoms,
    promogroups,
    promogroupsitems,
    purchase_backlog,
    purchaseheader,
    purchaseheader_global,
    purchaseheader_splitparent,
    purchaseline,
    purchaselinecolumns,
    purchaselinecustom,
    purchaselinediscount,
    query_sync,
    querylog,
    received_and_adjusted,
    received_and_transferred,
    receivepayments,
    reminderlist,
    resetcounter,
    returnheader,
    returnline,
    salaryassigned,
    salarygrade,
    salaryscale,
    sale_order_numbering,
    sale_readings,
    saleheader,
    saleline,
    saleline2,
    saleline_discount_password,
    saleorderheader,
    saleorderline,
    saleorderline2,
    saleorderline_discount_password,
    sales2,
    sales_salesorder_tagging,
    scd_claiming,
    scd_claiming_methods,
    scd_per_month_principalid,
    scd_per_month_supplierid,
    servergroups,
    servergroupsline,
    serverinfo,
    servers,
    servers2,
    servers_buffers,
    servers_closed,
    serversout,
    serversout2_tinnumber,
    serversout_taxinfo,
    session_readings,
    soa_ghl,
    soa_ghl_duplicate,
    soa_ghl_items,
    soa_header,
    soa_line,
    soa_line_deductions,
    soinventory,
    status,
    stockrequestline,
    stocksharing_uoms,
    stocksharingdirect,
    stocksharingnonmoving,
    supplierclasses,
    suppliergroupheader,
    suppliergrouplist,
    supplierinvoiceformat,
    suppliers,
    suppliers2,
    suppliers3,
    suppliers4,
    suppliers5_uompreference,
    supplierstax,
    taxcodes,
    taxcodes_default,
    taxes,
    terminals,
    terminals2,
    terminaltypes,
    whexptransferred,
    whlocations,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
