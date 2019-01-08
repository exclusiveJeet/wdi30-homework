# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hou
require "colorize"

system "clear"
puts "\t\t\t\t  TRIP Calculator".green
puts "\t\t\t\t ----------------"

print "\n\t\t\t\t Distance need to cover [in KMs] : "
distance = gets.to_f
print "\t\t\t\t Fuel Economy  [KMs/Ltr] : "
economy = gets.to_f
print "\t\t\t\t Fuel Price  [$ 0.00] : "
f_price = gets.to_f
print "\t\t\t\t Speed  [KMs/Hr] : "
speed = gets.to_f

trip_time = (distance/speed).round(2)
cost = ((distance/economy)*f_price).round(2)
puts "\n\t\t\t\t Its will take you #{trip_time} Hrs to cover #{distance} KMs with the Speed of #{speed}KM/H"
puts "\n\t\t\t\t Cost will be 💰 #{cost}".green