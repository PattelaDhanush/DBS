package com.dbs.Exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class TransferException extends RuntimeException {
	
	public TransferException(String msg) {
		super(msg);
	}
}
