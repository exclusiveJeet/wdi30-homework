# BMI Calculator Calculate the body mass index (BMI) for an individual, given their height[cm] and weight[kg]


#-----------------------
def patteren(bmi) 
    if bmi < 18.5
        patt = " 💛 "
    elsif bmi >=18.5 && bmi<=24.9
        patt = " 💚 "
    elsif bmi >=25 && bmi<=29.9
        patt = " ❤️ "
    elsif bmi >=30
        patt = " 💙 "
    end    

    puts "\n\n\t\t\t\t"
    puts "\t\t\t\t Under 18.5     =  💛 Malnourished"
    puts "\t\t\t\t 18.5 to 24.9   =  💚 Healthy"
    puts "\t\t\t\t 25.0 to 29.9   =  ❤️  Overweight"
    puts "\t\t\t\t Over 30        =  💙 Obese"
    puts "\n\t\t\t\t Your BMI       =  #{bmi}"
    puts "\n\n\t\t\t\t"

    for i in 1..30
        if i==bmi.round
            print patt
            next 
        end

        print " #{i}"
    end
 puts "\n\n\n"
end

#-------------------------


system "clear"
puts "\t\t\t\t  BMI Calculator"
puts "\t\t\t\t ----------------"

print "\n\t\t\t\t Enter your Height [in CMs] : "
height = gets.to_f
print "\t\t\t\t Enter your Weight [in KGs] : "
weight = gets.to_f

height /=100

bmi = weight / (height * height)

patteren(bmi)



