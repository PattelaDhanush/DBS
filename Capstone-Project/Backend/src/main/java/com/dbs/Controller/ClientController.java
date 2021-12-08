package com.dbs.Controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.Exception.TransferException;
import com.dbs.Models.Buyers_And_Seller;
import com.dbs.Models.Client;
import com.dbs.Repository.ClientRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/client")
public class ClientController {
	
	
	private static ClientRepository client_repo;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
	public ClientController(ClientRepository client_repo) {
		this.client_repo=client_repo;
	}
	
	@GetMapping
	public List<Client> getAllClient() {
		return client_repo.findAll();
	}
	
	@GetMapping("{id}")
	public Client getAllClientById(@PathVariable String id) {
		Client client= client_repo.findById(id)
						.orElseThrow(()->new TransferException("Client Not Found with id "+id));
		return client;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/custodian/{id}")
	public List<Client> getClientListByCustodianId(@PathVariable String id){
			return entityManager.createQuery("SELECT c FROM Client c WHERE c.custodian_id='"+id+"'").getResultList();
			
	}
	
	public static void updateamount2(Buyers_And_Seller bs, Buyers_And_Seller buyer_seller) {
		if(bs.getType().equals("buy")) {
			
			Client client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			
			double temp=buyer_seller.getQuantity()*bs.getPrice();
			
			client.setSell_amount(temp+client.getSell_amount());
		
			client_repo.save(client);
			
			 client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));

			client.setBuy_amount(temp+client.getBuy_amount());
			
			client_repo.save(client);
			
			
		}
		else{
			Client client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			
			double temp=buyer_seller.getQuantity()*bs.getPrice();
			client.setSell_amount(temp+client.getSell_amount());
		
			client_repo.save(client);
			
			 client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));

			client.setBuy_amount(temp+client.getBuy_amount());
			
			client_repo.save(client);
	}
		
	}

	public static void updateSameAmount(Buyers_And_Seller bs, Buyers_And_Seller buyer_seller) {
		if(bs.getType().equals("buy")) {
			Client client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setBuy_amount(bs.getQuantity()*bs.getPrice()+client.getBuy_amount());
			
			client_repo.save(client);
			
			client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setSell_amount(bs.getQuantity()*bs.getPrice()+client.getSell_amount());
		
			client_repo.save(client);
		}
		else{
			Client client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setSell_amount(bs.getQuantity()*bs.getPrice()+client.getSell_amount());
		
			client_repo.save(client);
		
			client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setBuy_amount(buyer_seller.getQuantity()*bs.getPrice()+client.getBuy_amount());
	
			client_repo.save(client);
	}
}

	public static void updateamount1(Buyers_And_Seller bs, Buyers_And_Seller buyer_seller) {
		
		if(bs.getType().equals("buy")) {
			Client client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			double temp=bs.getQuantity()*bs.getPrice();
			client.setBuy_amount(temp+client.getBuy_amount());
			
			client_repo.save(client);
			
			client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setSell_amount(temp+client.getSell_amount());
		
			client_repo.save(client);
		}
		else{
			Client client=client_repo.findById(bs.getClient_id())
						.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			double temp=bs.getQuantity()*bs.getPrice();
			client.setSell_amount(temp+client.getSell_amount());
		
			client_repo.save(client);
			
			client=client_repo.findById(buyer_seller.getClient_id())
					.orElseThrow(()->new TransferException("Client Not Found with id: "+bs.getClient_id()));
			client.setBuy_amount(temp+client.getBuy_amount());
	
			client_repo.save(client);
		}
		
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/custodian")
	public List<Client> getAmountByCustodian(){
		return entityManager.createQuery("SELECT c.custodian_id, sum(c.sell_amount) as SELL_AMOUNT, sum(c.buy_amount) as BUY_AMOUNT FROM Client c GROUP BY c.custodian_id").getResultList();
	}
	

}
