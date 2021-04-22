package com.sai;

public class Main {

    public static void main(String[] args) {

       

        Account ac = new Account();
        Account CharanAccount = new Account("102", 0.00, "SAICHARAN", "chakisai111@gmail.com", "919010860129");

        System.out.println(CharanAccount.getNumber());
        System.out.println(CharanAccount.getBalance());

        timsAccount.withdraw(100.0);
        timsAccount.deposit(50);
        timsAccount.withdraw(100);
        timsAccount.deposit(50);
        timsAccount.withdraw(100);

        Account AnuAccount = new Account("Anusha", "anu@gmail.com", "101");
        System.out.println(AnuAccount.getNumber() + " owner: " + AnuAccount.getCustomerName());

       

        VipAccount vip1 = new VipAccount();
        System.out.println(vip1.getName());

        VipAccount vip2 = new VipAccount("Indiana", 150);
        System.out.println(vip2.getName());

        VipCustomer vip3 = new VipCustomer("Caroline", 100, "chakisai123@gmail.com");
        System.out.println(vip3.getName());