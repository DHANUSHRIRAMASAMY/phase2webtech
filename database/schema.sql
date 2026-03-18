-- AgriSmart Database Schema

-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crops Table
CREATE TABLE crops (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    base_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Market Prices Table
CREATE TABLE market_prices (
    id INT PRIMARY KEY AUTO_INCREMENT,
    crop_id INT,
    location VARCHAR(100),
    price DECIMAL(10, 2),
    trend DECIMAL(5, 2),
    date DATE,
    FOREIGN KEY (crop_id) REFERENCES crops(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crop Calendar Table
CREATE TABLE crop_calendar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    crop_id INT,
    sowing_months VARCHAR(100),
    fertilizer_months VARCHAR(100),
    harvest_months VARCHAR(100),
    FOREIGN KEY (crop_id) REFERENCES crops(id)
);

-- Government Schemes Table
CREATE TABLE government_schemes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(200),
    description TEXT,
    eligibility TEXT,
    documents TEXT,
    benefits TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Farm Inputs Table
CREATE TABLE farm_inputs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50),
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    unit VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Calculations Table
CREATE TABLE user_calculations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    calculation_type VARCHAR(50),
    input_data JSON,
    result_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Profit Calculations Table (Detailed)
CREATE TABLE profit_calculations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    crop_name VARCHAR(100) NOT NULL,
    land_area DECIMAL(10, 2) NOT NULL,
    expected_yield DECIMAL(10, 2) NOT NULL,
    market_price DECIMAL(10, 2) NOT NULL,
    cost_per_acre DECIMAL(10, 2) NOT NULL,
    total_production DECIMAL(10, 2) NOT NULL,
    total_cost DECIMAL(10, 2) NOT NULL,
    estimated_revenue DECIMAL(10, 2) NOT NULL,
    expected_profit DECIMAL(10, 2) NOT NULL,
    calculation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Weather Data Table
CREATE TABLE weather_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(100),
    temperature DECIMAL(5, 2),
    humidity INT,
    wind_speed DECIMAL(5, 2),
    rain_forecast INT,
    weather_condition VARCHAR(50),
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data Inserts
INSERT INTO crops (name, category, base_price) VALUES
('Rice', 'Cereal', 2100.00),
('Wheat', 'Cereal', 1950.00),
('Cotton', 'Cash Crop', 5800.00),
('Sugarcane', 'Cash Crop', 3200.00),
('Tomato', 'Vegetable', 1500.00);

INSERT INTO government_schemes (name, full_name, description, eligibility, documents, benefits) VALUES
('PM-KISAN', 'Pradhan Mantri Kisan Samman Nidhi', 
 'Direct income support of ₹6000/year to all landholding farmers',
 'All landholding farmers, Valid Aadhaar card required',
 'Aadhaar Card, Bank Account Details, Land Records',
 '₹6000 per year in 3 installments, Direct bank transfer'),
 
('PMFBY', 'Pradhan Mantri Fasal Bima Yojana',
 'Comprehensive crop insurance scheme',
 'All farmers growing notified crops, Sharecroppers and tenant farmers',
 'Aadhaar Card, Bank Account, Land Records, Sowing Certificate',
 'Coverage for crop loss, Low premium rates, Quick claim settlement'),
 
('Soil Health Card', 'Soil Health Card Scheme',
 'Detailed soil analysis and recommendations',
 'All farmers, Free of cost',
 'Land ownership proof, Aadhaar Card',
 'Soil nutrient status, Fertilizer recommendations, Improved crop yield');
