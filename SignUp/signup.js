function InitSignup() {
    // Get all the steps
    const steps = document.querySelectorAll('.step-1, .step-2, .step-3, .step-4');
    // Get the next button
    const next = document.getElementById('next');
    // Get the previous button
    const previous = document.getElementById('previous');
    // Get the current step
    let currentStep = 0;
    // Next button click event
    next.addEventListener('click', () => {
        // Move to the next step
        steps[currentStep].classList.remove('active');
        steps[currentStep].classList.add('inactive');
        currentStep = currentStep + 1;
        steps[currentStep].classList.remove('inactive');
        steps[currentStep].classList.add('active');
        // Check if we are at the last step
        if (currentStep === steps.length - 1) {
            next.style.display = 'none';
        }
        // Show the previous button
        previous.style.display = 'block';
    });
    // Previous button click event
    previous.addEventListener('click', () => {
        // Move to the previous step
        steps[currentStep].classList.remove('active');
        steps[currentStep].classList.add('inactive');
        currentStep = currentStep - 1;
        steps[currentStep].classList.remove('inactive');
        steps[currentStep].classList.add('active');
        // Check if we are at the first step
        if (currentStep === 0) {
            previous.style.display = 'none';
        }
        // Show the next button
        next.style.display = 'block';
    });
}