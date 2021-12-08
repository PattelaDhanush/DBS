drop database capstone_project;
create database capstone_project;
use capstone_project;

 
create table custodian(
	custodian_id varchar(10) primary key,
	custodian_name varchar(100) not null
);


insert into custodian(custodian_name, custodian_id) values
('BNP Paribas Securities ServicesFrance','CS001'),
('The Bank of New York Mellon CorporationU.S.','CS002'),
('EuroclearBelgium','CS003'),
('HSBC Securities ServicesUnited Kingdom','CS004'),
('Credit SuisseSwitzerland','CS005'),
('Northern Trust CorporationU.S.','CS006'),
('ADMIN','ADMIN');

create table client(
	client_id varchar(10) primary key,
	client_name varchar(100) not null,
	custodian_id varchar(10) not null,
	transaction_limit double not null,
	buy_amount double not null default 0,
	sell_amount double not null default 0,
	FOREIGN KEY (custodian_id) REFERENCES custodian(custodian_id)
	);

insert into client( client_id, client_name, custodian_id, transaction_limit) values
('DBS001','MACQUARIE BANK LIMITED','CS001',14000000),
('DBS002','LLOYDS BANK CORPORATE MARKETS PLC','CS001',14000000),
('DBS003','KEYBANK NATIONAL ASSOCIATION','CS001',18000000),
('DBS004','JP MORGAN SECURITIES LLC','CS001',5000000),
('DBS005','JEFFERIES FINANCIAL SERVICES, INC.','CS002',21000006),
('DBS006','JB DRAX HONORE UK LTD','CS002',21000006),
('DBS007','J ARON & COMPANY SINGAPORE PTE','CS002',18000006),
('DBS008','J ARON & COMPANY LLC','CS002',7500003),
('DBS009','INTESA SANPAOLO SPA','CS002',21000012),
('DBS010','ING CAPITAL MARKETS LLC','CS002',21000012),
('DBS011','ICBC STANDARD BANK PLC','CS002',18000012),
('DBS012','HSBC BANK USA NA','CS002',5000004),
('DBS013',	'HSBC BANK PLC','CS003',17500015),
('DBS014',	'GOLDMAN SACHS PARIS INC ET CIE','CS003',28000024),
('DBS015',	'GOLDMAN SACHS MEXICO CASA DE BOLSA SA DE CV','CS003',12000012),
('DBS016',	'GAIN GTX LLC','CS003',12500015),
('DBS017',	'FIFTH THIRD BANK NATIONAL ASSOCIATION','CS003',7000008),
('DBS018',	'ED&F MAN DERIVATIVE PRODUCTS INC','CS003',28000032),
('DBS019',	'DEUTSCHE BANK AG','CS003',12000016),
('DBS020',	'DARBY SWAP TRADING LLC','CS003',7500012),
('DBS021',	'DANSKE BANK AS','CS003',21000030),
('DBS022',	'CREDIT SUISSE SECURITIES EUROPE LIMITED','CS003',35000050),
('DBS023',	'COOPERATIEVE RABOBANK UA','CS003',12000020),
('DBS024',	'COMMONWEALTH BANK OF AUSTRALIA ','CS004',7500015),
('DBS025',	'CITIGROUP ENERGY INC','CS004',21000036),
('DBS026',	'CITIBANK N A','CS004',14000024),
('DBS027',	'CITADEL SECURITIES SWAP DEALER LLC','CS004',36000072),
('DBS028',	' CARGIL INCORPORATED','CS005',10000024),
('DBS029',	'CAPITAL ONE NATIONAL ASSOCIATION','CS005',10500021),
('DBS030',	'CANTOR FITZGERALD SECURITIES','CS005',21000042),
('DBS031',	'CANADIAN IMPERIAL BANK OF COMMERCE','CS005',12000028),
('DBS032',	'BP ENERGY COMPANY','CS006',7500021),
('DBS033',	'BOFA SECURITIES JAPAN CO LTD','CS006',1500000);



create table instrument(
	instrument_id varchar(10) primary key,
	instrument_name varchar(50) not null,
	face double,
	expiry date	
);


insert into instrument(instrument_id, instrument_name, face, expiry) values
('I001',	'US treasury Bills',	100,	NULL),
('I002',	'RBI-2026 -6.5%',	1000,	NULL),
('I003',	'RBI-2045 -8%',	1000,	NULL),
('I004',	'USDINR',	-1,	NULL),
('I005',	'EUR USD-FUT',	-1,	'28-08-21');

create table Buyers_And_Seller(	
	id int primary key auto_increment,
	client_id varchar(10) not null,
	instrument_id varchar(10) not null,
	quantity int not null,
	price double not null,
	type varchar(10)
);


select * from client;
select * from custodian;
select * from instrument;


desc Buyers_And_Seller;

insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(1,"DBS001","I001",25,100, "buy");


insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(6,"DBS005","I003",35,200,"sell");

insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(2,"DBS002","I001",25,100, "buy");


insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(3,"DBS003","I003",35,200,"sell");

insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(4,"DBS004","I001",25,100, "buy");


insert into Buyers_And_Seller(id, client_id ,instrument_id ,quantity ,	price , type) values
(5,"DBS006","I003",35,200,"sell");

select * from Buyers_And_Seller;



select custodian_id, sum(sell_amount), sum(buy_amount) from client group by custodian_id;