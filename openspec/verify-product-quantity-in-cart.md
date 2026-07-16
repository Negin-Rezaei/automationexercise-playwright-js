# Metadata

- **Title:** Verify Product Quantity in Cart
- **Feature:** Shopping Cart Management
- **Module:** Product Catalog & Cart
- **Priority:** High
- **Requirement ID:** REQ-CART-002
- **Test Case ID:** TC-013
- **Version:** 1.0
- **Automation Reference:** [tests/cart/verify_product_quantity_in_cart.spec.js](../tests/cart/verify_product_quantity_in_cart.spec.js)

## Overview

This specification describes the ability of a user to select a specific product, view its details, adjust the desired purchase quantity before adding it to the cart, and confirm that the cart reflects the exact quantity requested.

## Business Goal

Customers frequently wish to purchase more than one unit of a product in a single transaction. Accurately capturing and reflecting the requested quantity in the cart is critical to order accuracy, customer satisfaction, correct revenue calculation, and downstream inventory and fulfillment processes.

## Actors

- **Primary Actor:** Shopper (guest or registered user)
- **Secondary Actor:** System (manages product details and cart state)

## Preconditions

- The application's home page is available and accessible.
- The product catalog contains at least one available product with viewable details.
- The user is not required to be logged in to view product details or add products to the cart.

## Main Flow

```gherkin
Feature: Verify Product Quantity in Cart

  As a shopper
  I want to specify the quantity of a product before adding it to my cart
  So that my cart accurately reflects how many units I intend to purchase

  Scenario: Add a product to the cart with a specific quantity
    Given I am on the home page
    And the home page is displayed successfully
    When I choose to view the details of a product
    Then the product details page should be displayed successfully
    When I increase the desired quantity of the product to 4
    And I add the product to my cart
    And I choose to view my cart
    Then I should be taken to the cart page
    And the selected product should appear in the cart
    And the quantity for that product should be exactly 4
```

## Acceptance Criteria

1. A user must be able to navigate from the home page directly to a product's details page.
2. The product details page must clearly display the selected product and provide a means to specify a purchase quantity.
3. The default quantity on the product details page must be one unit.
4. The user must be able to increase the quantity to any valid whole number before adding the product to the cart.
5. When the product is added to the cart, the cart must reflect the exact quantity that was specified, not the default quantity.
6. The cart must correctly associate the specified quantity with the correct product.

## Business Rules

- The quantity specified on the product details page at the time of the "add to cart" action determines the quantity recorded in the cart.
- Quantity values must be positive whole numbers; fractional or zero quantities are not valid purchase quantities.
- If the same product is added to the cart multiple times, quantities are expected to accumulate; this scenario, however, covers a single addition with an adjusted quantity.
- The recorded quantity in the cart must remain accurate and unchanged unless the user explicitly modifies it.

## Expected Result

A shopper is able to select a product, specify a custom quantity greater than the default of one, add it to the cart, and verify that the cart accurately displays that exact quantity for the selected product.

## Notes

- This specification assumes the product details page allows the quantity to be adjusted via direct numeric input or equivalent controls; the precise input mechanism is an implementation detail outside the scope of this document.
- This scenario complements "Add Products in Cart" (REQ-CART-001) by validating quantity accuracy rather than multi-product addition.
- Stock and inventory limits on maximum purchasable quantity are assumed to exist but are out of scope for this specification.
